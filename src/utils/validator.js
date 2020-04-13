
export const validateEmail = (rule, value, callback) => {
    if (/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
        callback();
    } else {
        callback(new Error("请输入正确的邮箱"));
    }
}

export const validateIP = (rule, value, callback) => {
    if (/((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)/.test(value)) {
        callback();
    } else {
        callback(new Error("请输入正确的Ip"));
    }
}

export const validatePort = (rule, value, callback) => {
    if (value < 65535 && value > 1) {
        callback();
    } else {
        callback(new Error("端口号范围为1~65535"));
    }
}

export const validateRemotPort = (rule, value, callback) => {
    if (value <= 50000 && value >= 10000) {
        callback();
    } else {
        callback(new Error("端口号范围为10000~50000"));
    }
}

export const validateSubDomian = (rule, value, callback) => {
    if (/[a-z0-9_-]+/.test(value)) {
        callback();
    } else {
        callback(new Error("子域名只能由 小写字母数字下划或线横线组成"));
    }
}