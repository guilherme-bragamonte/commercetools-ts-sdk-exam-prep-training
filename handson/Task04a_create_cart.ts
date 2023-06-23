import * as checkout from "./lib/order";
import { createPayment } from "./lib/payment";
import { log } from "../utils/logger";

// TODO Step 1: Update customer key
const customerKey = "gb-customer";

// TODO Step 2: create a cart and add line items to it

const prepareCart = async () => {

    let customerCart = await checkout.createCart(customerKey);

    if (customerCart) {
        return {
            status: 201,
            message: "Cart created: " + customerCart.body.id,
        };
    }
};

prepareCart().then(log).catch(log);
