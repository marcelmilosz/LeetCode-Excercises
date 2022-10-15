from turtle import pos


class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """

        ret = ""
        minWord = min(strs, key=len)

        for i in range(0, len(minWord)):
            for s in strs:
                if strs[0][i] != s[i] or i == len(s):
                    return ret

            ret += strs[0][i]

        return ret

            
# S = Solution()
# print("Return: ", S.longestCommonPrefix(strs = ["ab","a"]))
