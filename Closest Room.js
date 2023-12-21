var closestRoom = function(rooms, queries) {
    rooms.sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < queries.length; i++) {
        queries[i] = [queries[i], i];
    }
    queries.sort((a, b) => b[0][1] - a[0][1]);
    let res = new Array(queries.length).fill(-1);
    let j = 0;
    let ids = [];
    for (let [query, index] of queries) {
        let [preferred, minSize] = query;
        while (j < rooms.length && rooms[j][1] >= minSize) {
            ids.push(rooms[j++][0]);
        }
        ids.sort((a, b) => a - b);
        let l = 0, r = ids.length - 1;
        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            if (ids[mid] < preferred) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        if (ids.length > 0) {
            if (l > 0 && preferred - ids[l - 1] <= ids[l] - preferred) {
                res[index] = ids[l - 1];
            } else {
                res[index] = ids[l];
            }
        }
    }
    return res;
};