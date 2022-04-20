import { LightningElement, api } from 'lwc';

/**
 * @slot section1Slot
 * @slot section2Slot
 * @slot section3Slot
 * @slot section4Slot
 * @slot section5Slot
 */
export default class FiveTabs extends LightningElement {

    @api section1Label = 'Section 1';
    @api section2Label = 'Section 2';
    @api section3Label = 'Section 3';
    @api section4Label = '';
    @api section5Label = '';

    @api hideSection1 = false;
    @api hideSection2 = false;
    @api hideSection3 = false;
    @api hideSection4 = false;
    @api hideSection5 = false;

}