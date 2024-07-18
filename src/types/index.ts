type commonFields = {
    id?: string;
    created_at?: string;

};

export const CampaignStatusArray = ["Draft", "Sent", "Archived"];
export const EmailStatusArray = ["Draft", "Completed"];
export const SubscriberStatusArray = ["Active","Inactive", "Completed"];


type CampaignStatus = typeof CampaignStatusArray[number];
type EmailStatus = typeof EmailStatusArray[number];
type SubscriberStatus = typeof SubscriberStatusArray[number];


export type Campaign = {
    name?: string;
    from?:  string | undefined;
    subject?: string | undefined;
    user_id?: string | undefined;
    email_id?: string | undefined;
    status?: CampaignStatus | undefined

} & commonFields

export type Email = {
    title?: string;
    content?: string;
    status?: EmailStatus;
} & commonFields

export type Subscriber = {
    email?: string;
    owner_id?: string;
    status?: SubscriberStatus;
} & commonFields

export type User = {
    email?: string;
} & commonFields

