export const VALIDATE_ARRAY = (v: string | string[], match: (s: string) => string[]): boolean => {
    if (Array.isArray(v)) {
        let isValid = true;
        v.forEach((s: string) => {
            if (isValid && !match(s)) {
                isValid = false;
            }
        });
        return isValid;
    }
    return !!match(v as string);
};
