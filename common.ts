

export interface Combobox {
    value: any;
    name: string;
}
export interface EnabledCombobox extends Combobox {
    enabled: boolean;
}
export interface ComboboxAuth extends EnabledCombobox {
    productId: number;
    subProductId: number;
}

export interface ComboboxType extends Combobox {
    type: string;
}

export interface ValueName<R = any> {
    [key: string]: R;
}

export type ValueNameRender = (v) => any;

export interface ComboboxData<T extends Combobox, R = any> {
    array: T[];
    map: ValueName<R>;
}
export interface ComboboxTypeData extends ComboboxData<ComboboxType> {
    type: ValueName;
}
export interface ComboboxCallback<T extends ComboboxData<Combobox>> {
    (data: T);
}

export interface SubmitConfig {
    url: string;
    target?: string;
    method?: string;
    params: ValueName;
}
