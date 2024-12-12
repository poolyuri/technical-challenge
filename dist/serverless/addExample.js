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
const uuid_1 = require("uuid");
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const addExample = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dynamodb = new aws_sdk_1.default.DynamoDB.DocumentClient();
        const { title, description } = JSON.parse(req.body);
        const createdAt = new Date();
        const id = (0, uuid_1.v4)();
        const newExample = {
            id,
            title,
            description,
            createdAt
        };
        yield dynamodb.put({
            TableName: 'ExampleTable',
            Item: newExample
        }).promise();
        return {
            status: 200,
            body: JSON.stringify(newExample)
        };
    }
    catch (error) {
        console.log(error);
    }
});
module.exports = {
    addExample
};
//# sourceMappingURL=addExample.js.map