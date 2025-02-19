export const useUtilities = () => {
    function toTitleCase(str) {
        return str[0].toUpperCase() + str.substring(1);
    }
    return {
        toTitleCase
    };
}