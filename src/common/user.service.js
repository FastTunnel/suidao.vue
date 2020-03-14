import ApiService from "@/common/api.service"

export const TagsService = {
    sign(param) {
        return ApiService.post("sign/sign", param);
    },

    login(param) {
        return ApiService.post("login/login", param);
    }
};

export default TagsService;
