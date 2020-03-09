import ApiService from "@/common/api.service"

export const TagsService = {
    get() {
        return ApiService.get("tags");
    }
};