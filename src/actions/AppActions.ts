import { APP_ACTION } from "../constants/AppConstants";
import { IEmployee } from "../../interfaces";

export function appIsLoading(value: boolean) {
    return {
        type: APP_ACTION.LOADING,
        isLoading: value
    };
}

export function appGetsData(items: IEmployee[]) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items: APP_ACTION.GETS_DATA
    };
}