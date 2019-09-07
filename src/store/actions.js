import axios from 'axios'
import qs from 'qs'

export default {
    sub: ({
        commit
    }, sub) => {
        axios.post("/php/sub.php", qs.stringify(sub)).then(res => {
            if (res.data == 1) {
                commit("depart", sub.depart);
                commit("already", {
                    name: sub.name,
                    uid: sub.uid
                });
                commit("snack", {
                    color: "success",
                    text: "报名成功，可前往查询页查询！",
                    to: "/inquiry"
                });
            } else if (res.data == -1) {
                commit("already", {
                    name: sub.name,
                    uid: sub.uid
                });
                commit("snack", {
                    color: "warning",
                    text: "已报名，可前往查询页查询！",
                    to: "/inquiry"
                });
            } else throw res;
        }).catch(err => {
            window.console.log(err);
            commit("snack", {
                color: "error",
                text: "提交失败，请确认网络后重新提交！"
            });
        });
    },
    search: ({
        commit
    }, inquiry) => {
        axios.post("/php/inquiry.php", qs.stringify(inquiry)).then(res => {
            if (res.data.status == 1) {
                commit("inquiry", res.data.inquiry);
                commit("already", inquiry);
                commit("snack", {
                    color: "success",
                    text: "查询状态成功！"
                });
            } else if (res.data.status == -1) {
                commit("already", inquiry);
                commit("snack", {
                    color: "warning",
                    text: "未报名，可前往报名页报名！",
                    to: "/apply"
                });
            } else if (res.data.status == -2)
                commit("snack", {
                    color: "warning",
                    text: "姓名或学号错误！"
                });
            else throw res;
        }).catch(err => {
            window.console.log(err);
            commit("snack", {
                color: "error",
                text: "提交失败，请确认网络后重新提交！"
            });
        });
    },
    plus: ({
        commit
    }, plus) => {
        axios.post("/php/plus.php", qs.stringify(plus)).then(res => {
            if (res.data == 1) {
                commit("depart", plus.plus);
                commit("snack", {
                    color: "success",
                    text: "追加报名成功，前往查询！",
                    to: "/inquiry"
                });
            } else throw res;
        }).catch(err => {
            window.console.log(err);
            commit("snack", {
                color: "error",
                text: "提交失败，请确认网络后重新提交！"
            });
        });
    },
    members: ({
        commit
    }) => {
        let desserts = axios.get("/php/members.php").then(res => {
            if (res.data.status)
                return res.data.desserts;
            else throw res;
        }).catch(err => {
            window.console.log(err);
            commit("snack", {
                color: "error",
                text: "获取，请确认网络后重新提交！"
            });
        });
        return desserts;
    }
}