class Solution(object):


    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """

        rDict = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000}
        p = 0
        rSum = 0

        while p < len(s):

            if p < len(s) - 1:
                if rDict[s[p]] < rDict[s[p + 1]]:
                    rSum += rDict[s[p + 1]] - rDict[s[p]]
                    p += 1
                else:
                    rSum += rDict[s[p]]
            else:
                if p == len(s) - 1:
                    rSum += rDict[s[p]]
                elif p > len(s) - 1:
                    continue

            p += 1

        return rSum    
        
S = Solution()

print(S.romanToInt("MMCXXXVII"))
        