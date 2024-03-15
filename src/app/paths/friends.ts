export const FRIENDS_USER : string = '/friends/' + localStorage.getItem('idUser')
export const SUBSCRIPTIONS_USER : string = '/subscriptions/' + localStorage.getItem('idUser')
export const SUBSCRIBERS_USER : string = '/subscribers/' + localStorage.getItem('idUser')
export const SEARCH : string = '/search'

export const Friends_path = {
    FRIENDS_USER : '/[id]/friends/',
    SUBSCRIPTIONS_USER : '/[id]/subscriptions/',
    SUBSCRIBERS_USER : '/[id]/subscribers/',
    SEARCH : '/search'
}