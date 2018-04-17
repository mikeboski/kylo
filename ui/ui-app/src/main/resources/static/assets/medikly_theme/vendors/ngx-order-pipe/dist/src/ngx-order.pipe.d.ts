import { PipeTransform } from '@angular/core';
export declare class OrderPipe implements PipeTransform {
    transform(value: any | any[], expression?: any, reverse?: boolean): any;
    /**
     * Sort array
     *
     * @param value
     * @param expression
     * @param reverse
     * @returns {any[]}
     */
    private sortArray(value, expression?, reverse?);
    /**
     * Transform Object
     *
     * @param value
     * @param expression
     * @param reverse
     * @returns {any[]}
     */
    private transformObject(value, expression?, reverse?);
    /**
     * Parse expression, split into items
     * @param expression
     * @returns {string[]}
     */
    private static parseExpression(expression);
    /**
     * Get value by expression
     *
     * @param object
     * @param expression
     * @returns {any}
     */
    private static getValue(object, expression);
    /**
     * Set value by expression
     *
     * @param object
     * @param value
     * @param expression
     */
    private static setValue(object, value, expression);
}