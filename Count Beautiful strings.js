var beautifulSubstrings = function(s, k) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        let vCount = 0, cCount = 0;
        for (let j = i; j < s.length; j++) {
            if (vowels.has(s[j])) {
                vCount++;
            } else {
                cCount++;
            }
            if (vCount === cCount && vCount * cCount % k === 0) {
                count++;
            }
        }
    }

    return count;
};

