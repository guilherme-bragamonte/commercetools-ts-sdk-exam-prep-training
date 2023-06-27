// How would you add two different customers to the same customer group?

import { CustomerSetCustomerGroupAction } from "@commercetools/platform-sdk";
import { pocApiRoot } from "../lib/client";
import { log } from "../../utils/logger";
import { getCustomerById } from "../lib/customer";

const customerIds = [
    '236a9530-b7a5-4f6b-99cc-667a9995c4ab',
    'b0300b44-5530-405a-b19a-9f05f4eeafcd'
];
const newCustomerGroupId = '0b7bcad4-00df-48c4-b3e7-8c1b44d59539';

const setCustomerGroupAction: CustomerSetCustomerGroupAction = {
    action: 'setCustomerGroup',
    customerGroup: {
        typeId: 'customer-group',
        id: newCustomerGroupId,
    }
}

Promise.all(
    customerIds.map(async customerId =>
        pocApiRoot
            .customers()
            .withId({ ID: customerId })
            .post({
                body: {
                    actions: [setCustomerGroupAction],
                    version: (await getCustomerById(customerId)).body.version
                }
            })
            .execute()
    )
).then(log).catch(log);