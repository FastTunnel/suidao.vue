import ApiService from "@/common/api.service"

export const TagsService = {
    sign(param) {
        return ApiService.post("sign/sign", param);
    }
};

export default TagsService;
