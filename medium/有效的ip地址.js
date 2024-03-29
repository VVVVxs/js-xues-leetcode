// 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
// 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const res = [];

    const dfs = (path, idx) => {
        if (path.length === 4 && idx === s.length) {
            res.push(path.join('.'))
        }
        if (path.length > 4) {
            return;
        }
        if (s[idx] === '0') {
            path.push('0');
            dfs(path, idx + 1);
        } else {
            for (let i = 0; i <= 3; i++) {
                if (idx + i > s.length) {
                    return;
                }
                const num = Number(s.substr(idx, i));
                if (num > 255) {
                    return
                }
                path.push(s.substr(idx, i));
                console.log(path)
                dfs(path, idx + i);
                path.pop();
            }
        }
    }

    dfs([], 0);

    return res;
};

console.log('11',restoreIpAddresses('25525511135'))