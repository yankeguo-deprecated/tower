/**
 * testSql.ts
 *
 * Copyright (c) 2018 Yanke Guo <guoyk.cn@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import path = require("path");
import {Tower} from "../";

describe("XlsAdapter", () => {
     it("should work", async () => {
         const tower = new Tower({
             configDir: path.join(__dirname, "testConfig"),
             scriptDir: path.join(__dirname, "testScript"),
         });
         await tower.load();
         const context = tower.createContext();
         const xlsAdapter = context.xlsAdapter("xls");
         await xlsAdapter.write("testTheme", "test", [["A", "B", "C"], ["A1", "A2", "A3"]]);
         context.dispose();
     });
 });
