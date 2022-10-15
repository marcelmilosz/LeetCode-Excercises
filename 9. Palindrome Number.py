
class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """

        for i in range(0, len(str(x))):
            if str(x)[i] != str(x)[len(str(x))-1-i]:
                return False

        return True
        

S = Solution()
print(S.isPalindrome(123421))