import { log } from "../utils/logger";
import { getSourceCategories } from "./lib/categoryService";
import { checkImportOperationsStatus, checkImportSummary, importCategories } from "./lib/importService";

// TODO Step 1: Provide your container key
const containerKey = 'tt-ImportContainer';

// TODO Step 2: Get products from the Concept project and import to POC
// getSourceCategories().then(categories => importCategories(containerKey, categories)).catch(log);

// TODO Step 3: Check the status of your import operations
// check import summary for your container
// checkImportSummary(containerKey).then(log).catch(log);

// check import operations for your container
// checkImportOperationsStatus(containerKey).then(operations =>
//     operations.body.results.forEach(operation =>
//         log(operation.id + " : " + operation.state)
//     )
// );

// Check the status of import operations by their Ids
// checkImportOperationStatusById("b17bde76-9536-4115-b4d7-d9c1a54194a0").then(log).catch(log);
// checkImportOperationStatusById("b0a5adb1-2b1d-40fc-94a4-64b240c11020").then(log).catch(log);

// TODO Step 4: Verify in the Merchant Center