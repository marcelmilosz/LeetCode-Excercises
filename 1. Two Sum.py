class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        dictio = {}
        for i, val in enumerate(nums):
            m = target - val
            if m in dictio:
                return [dictio[m], i]
            else:
                dictio[val] = i
        


S = Solution()
print(S.twoSum(nums = [3, 3, 4], target = 7))

