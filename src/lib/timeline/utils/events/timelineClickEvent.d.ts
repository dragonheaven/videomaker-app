import { TimelineElement } from '../TimelineElement';
import { TimelineBaseEvent } from './timelineBaseEvent';
import { TimelineValues } from '../timelineValues';
export declare class TimelineClickEvent extends TimelineBaseEvent implements TimelineValues {
    args: MouseEvent;
    /**
     * Clicked screen position.
     */
    pos: DOMPoint;
    /**
     * Elements list under the click
     */
    elements: Array<TimelineElement>;
    /**
     * Target element
     */
    target: TimelineElement;
    /**
     * Value to be used.
     */
    val: number;
    /**
     * Snapped value.
     */
    snapVal: number;
    /**
     * Unsnapped original value.
     */
    originalVal: number;
}
