"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const getExamples = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dynamodb = new aws_sdk_1.default.DynamoDB.DocumentClient();
        const result = yield dynamodb.scan({
            TableName: 'ExampleTable'
        }).promise();
        const examples = result.Items;
        return {
            status: 200,
            body: {
                examples
            }
        };
    }
    catch (error) {
        console.log(error);
    }
});
module.exports = {
    getExamples
};
//# sourceMappingURL=getExample.js.map