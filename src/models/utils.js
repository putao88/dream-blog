/*
 * @Author: houxiaoling 
 * @Date: 2020-07-31 14:42:15 
 * @Last Modified by: houxiaoling
 * @Last Modified time: 2020-10-21 17:38:10
 */

/**
 * @param {Object} 
 * data: 源数据
 * father_id：父ID
 * label：渲染字段名
 * value：渲染主键
 * children：渲染子主键
 * hasArticle : 是否包含文章
 * @returns {Object} tree
 * 整合数据成树形结构需要的
 */
export const fixIntoTree = (data, father_id, label, value, children, hasArticle) => {
    var tree = [];
    var temp;
    for (var i = 0; i < data.length; i++) {
        if (data[i].father_id == father_id) {
            if (!hasArticle && data[i].isArticle) {
                continue
            } else {
                var obj = {
                    [value]: data[i].id,
                    [label]: data[i].name,
                };
                temp = fixIntoTree(data, data[i].id, label, value, children, hasArticle);
                if (temp.length > 0) {
                    obj[children] = temp;
                }
                tree.push(obj);
            }
        }
    }
    return tree
}


