import { HttpResponse } from '@angular/common/http';

export interface RequestCacheEntry {
    url: string;
    response: HttpResponse<any>;
    lastRead: number;
}

export interface ColumnObject {
    columnId: string,
    propertyName: string | number | Date
}

export interface SearchGroup {
    disabled?: boolean;
    name: string;
    option: SearchOption[];
}

export interface SearchOption {
    value: string;
    viewValue: string;
}
