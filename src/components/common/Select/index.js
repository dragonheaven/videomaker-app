import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Select = ({
  name, label, options, value, values, placeholder, editable, creatable, multi, limitCount, onChange, fixedOptions, searchable, ...rest
}) => {
  const [text, setText] = useState(value);
  const [search, setSearch] = useState('');
  const [texts, setTexts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [dropdownOpened, setDropdownOpened] = useState(false);

  const verifySelectClick = (e, select) => {
    if (select === name && e.path) {
      if (!e.path.find((path) => path.id === `select_${name}`)) {
        setDropdownOpened(false);
      }
    }
  };

  const onWindowClick = (e) => {
    verifySelectClick(e, name);
  };

  useEffect(() => {
    window.addEventListener('click', onWindowClick);
    return () => window.removeEventListener('click', onWindowClick);
  });

  useEffect(() => {
    if (multi) {
      setTexts(values);
    } else {
      setText(value);
    }
  }, [multi, value, values]);

  const filteredOptions = options.filter((option) => {
    if (searchable) {
      return !search
        || (search && option.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }
    if (editable && !option.toLowerCase().startsWith(search)) {
      return false;
    }
    return !(multi && texts.indexOf(option) !== -1);
  });

  const onInputChange = (e) => {
    const { value } = e.target;
    if (!creatable) {
      if (filteredOptions.findIndex((option) => (option.toLowerCase().startsWith(value.toLowerCase()))) === -1) {
        return;
      }
    }
    setText(value);
    !searchable && setSearch(value.toLowerCase());
    setDropdownOpened(true);
    setCurrentIndex(-1);
    if (!multi && (creatable || value === '' || filteredOptions.findIndex((option) => (option === value)) !== -1)) {
      onChange(name, value);
    }
  };

  const onItemSelect = (text, fixedOption = false) => {
    if (fixedOption) {
      onChange(name, '');
      return;
    }

    let value = text;
    const similarOption = options.find((option) => option.toLowerCase() === value.toLowerCase());
    if (!similarOption && !creatable) {
      setText('');
      setSearch('');
      setDropdownOpened(false);
      setCurrentIndex(-1);
      if (!multi) {
        onChange(name, '');
      }
      return;
    }

    if (similarOption) {
      value = similarOption;
    }
    if (multi) {
      setText('');
      if (values.findIndex((v) => v.toLowerCase() === value.toLowerCase()) === -1) {
        setTexts([...texts, value]);
        onChange(name, [...texts, value]);
      }
    } else {
      setText(value);
      onChange(name, value);
    }
    setSearch('');
    setDropdownOpened(false);
    setCurrentIndex(-1);
  };

  const onRemoveValue = (value) => {
    const values = texts.filter((text) => text !== value);
    setTexts(values);
    onChange(name, values);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && currentIndex === -1) {
      e.preventDefault();
      onItemSelect(text);
    }

    if (dropdownOpened && filteredOptions.length > 0) {
      if (e.key === 'ArrowDown') {
        setCurrentIndex((currentIndex + 1) % filteredOptions.length);
      }
      if (e.key === 'ArrowUp') {
        if (currentIndex === -1) {
          setCurrentIndex(filteredOptions.length - 1);
        } else {
          setCurrentIndex((currentIndex + filteredOptions.length - 1) % filteredOptions.length);
        }
      }
      if (e.key === 'Escape') {
        setCurrentIndex(-1);
        setDropdownOpened(false);
      }
      if (e.key === 'Enter' && currentIndex > -1) {
        e.preventDefault();
        onItemSelect(filteredOptions[currentIndex]);
      }
    }
  };

  const toggleDropdown = () => {
    setDropdownOpened(!dropdownOpened);
  };

  const onClickSearchBox = () => {
    setSearch('');
    setDropdownOpened(!dropdownOpened);
  };

  const selectBoxComponent = () => {
    if (multi) {
      return (
        <div className="form-control multi-select">
          {
            texts.map((text, index) => (
              <div key={index} className="tag">
                <span>{text}</span>
                &nbsp;
                <span className="remove" onClick={() => onRemoveValue(text)}>x</span>
              </div>
            ))
          }
          {
            editable
              ? (
                <input
                  type="text"
                  value={text}
                  placeholder={placeholder}
                  onChange={onInputChange}
                  onKeyDown={onKeyDown}
                  onClick={onClickSearchBox}
                  spellCheck={false}
                />
              )
              : null
          }
        </div>
      );
    }

    if (editable) {
      return (
        <input
          type="text"
          className="form-control"
          value={text}
          placeholder={placeholder}
          {...rest}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          onClick={onClickSearchBox}
          spellCheck="false"
        />
      );
    }

    return (
      <span
        className="form-control"
        onClick={onClickSearchBox}
      >
        {text}
      </span>
    );
  };

  return (
    <div className="select-container">
      {
        label
          ? <label>{label}</label>
          : null
      }
      <div className="select-box" id={`select_${name}`}>
        {
          selectBoxComponent()
        }
        <span className="icon-right" onClick={toggleDropdown}>
          <i className={`fa ${dropdownOpened ? 'fa-sort-up' : 'fa-sort-down'}`} />
        </span>
        {
          dropdownOpened
            ? (
              <div className="dropdown-list">
                { searchable && (
                  <div className="fixed">
                    <input
                      type="text"
                      className="form-control"
                      value={search}
                      placeholder="Search..."
                      onChange={(ev) => setSearch(ev.target.value)}
                      spellCheck="false"
                    />
                  </div>
                )}
                <div className="scrollable">
                  {
                    filteredOptions.map((option, index) => (
                      <span
                        key={option}
                        className={`${currentIndex === index ? 'active' : ''}`}
                        onClick={() => onItemSelect(option)}
                      >
                        {option}
                      </span>
                    ))
                  }
                </div>
                { fixedOptions.length > 0 && <div className="separator" /> }
                { fixedOptions.length > 0 && (
                  <div className="fixed">
                    { fixedOptions.map((option, index) => (
                      <span
                        key={option}
                        onClick={() => onItemSelect(option, true)}
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                ) }
              </div>
            )
            : null
        }
      </div>
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  fixedOptions: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.any,
  values: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
  editable: PropTypes.bool,
  creatable: PropTypes.bool,
  searchable: PropTypes.bool,
  multi: PropTypes.bool,
  limitCount: PropTypes.number,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  label: '',
  value: '',
  values: [],
  placeholder: '',
  editable: false,
  creatable: false,
  searchable: false,
  multi: false,
  limitCount: -1,
  onChange: () => {},
  fixedOptions: [],
};

export default Select;
