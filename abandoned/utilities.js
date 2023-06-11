export const util = {
    length(x) {
        if (typeof x == "number") {
            return x.toString().split('').length;
        }
        else
            return x.length;
    },
    forinc() {
    }
};
