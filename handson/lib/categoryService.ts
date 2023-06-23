import { ClientResponse } from "@commercetools/importapi-sdk";
import { CategoryPagedQueryResponse } from "@commercetools/platform-sdk";
import { concApiRoot } from "./client";

export const getSourceCategories = async (): Promise<ClientResponse<CategoryPagedQueryResponse>> =>
    concApiRoot
        .categories()
        .get()
        .execute();