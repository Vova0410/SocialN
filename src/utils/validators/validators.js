/**
 * Created by Dell on 28.10.2019.
 */

export const required = value => (value ? undefined : 'Required');

export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
