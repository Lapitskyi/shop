var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
import { API_URL } from "./constants.js";
export class ApiService {
    constructor() {
        this.api = axios.create({
            baseURL: API_URL,
            headers: { "Content-Type": "application/json" }
        });
        this.setupInterceptors();
    }
    setupInterceptors() {
        this.api.interceptors.request.use(this.handleRequest, this.handleRequestError);
        this.api.interceptors.response.use(this.handleResponse, this.handleResponseError);
    }
    handleRequest(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return request;
        });
    }
    handleRequestError(error) {
        console.error("Request Error:", error.message);
        return Promise.reject(error);
    }
    handleResponse(response) {
        return response.data;
    }
    handleResponseError(error) {
        return __awaiter(this, void 0, void 0, function* () {
            if (error.response) {
                console.error(`Response error [${error.response.status}]:`, error.response.data);
            }
            else if (error.request) {
                console.error("No response received:", error.request);
            }
            else {
                console.error("Setup error:", error.message);
            }
            return Promise.reject(error);
        });
    }
    get(url_1) {
        return __awaiter(this, arguments, void 0, function* (url, options = {}) {
            try {
                return yield this.api.get(url, options);
            }
            catch (error) {
                throw error;
            }
        });
    }
    post(url_1, body_1) {
        return __awaiter(this, arguments, void 0, function* (url, body, options = {}) {
            try {
                return yield this.api.post(url, body, options);
            }
            catch (error) {
                throw error;
            }
        });
    }
    put(url_1, body_1) {
        return __awaiter(this, arguments, void 0, function* (url, body, options = {}) {
            try {
                return yield this.api.put(url, body, options);
            }
            catch (error) {
                throw error;
            }
        });
    }
    patch(url_1, body_1) {
        return __awaiter(this, arguments, void 0, function* (url, body, options = {}) {
            try {
                return yield this.api.patch(url, body, options);
            }
            catch (error) {
                throw error;
            }
        });
    }
    delete(url_1) {
        return __awaiter(this, arguments, void 0, function* (url, options = {}) {
            try {
                return yield this.api.delete(url, options);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
export const api = new ApiService();
