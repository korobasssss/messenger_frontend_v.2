import {Main_path} from "@/app/paths/main";

export const Friends_path = {
    FRIENDS_USER :
        Main_path.FRIENDS + '/[id]/friends/',
    SUBSCRIPTIONS_USER :
        Main_path.FRIENDS + '/[id]/subscriptions/',
    SUBSCRIBERS_USER :
        Main_path.FRIENDS + '/[id]/subscribers/',
    SEARCH :
        Main_path.FRIENDS + '/search'
}