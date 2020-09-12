import { FormControl } from '@angular/forms';

export interface FormError {
    isError: boolean;
    errorField: string;
    errorText: string;
}
