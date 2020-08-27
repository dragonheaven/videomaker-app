import { TimelineBaseEvent } from './timelineBaseEvent';
import { TimelineElement } from '../TimelineElement';
import { TimelineEventSource } from '../../animation-timeline';
export declare class TimelineKeyframeChangedEvent extends TimelineBaseEvent {
    /**
     * Value to be used.
     */
    val: number;
    /**
     * Target element
     */
    target: TimelineElement;
    /**
     * Event source.
     */
    source: TimelineEventSource;
}
