# Levenshtein Distance (Edit Distance)

Q: Given two strings str1 and str2 and below operations that can be performed on str1. Find minimum number of operations required to convert str1 into str2.
    1. Insert
    2. Remove
    3. Replace

All of the above operations are of cost=1.

A: This is the "Levenshtein distance" between str1 and str2. The algorithm to compute the Levenshtein distance is as follows (dynamic programming):

1.  Let the length of str1 and str2 be M and N, respectively. 
2.  Create a (M+1)x(N+1) array Dist to track the edit distance. In the programming language where the array index starts with 0, we define `Dist[m][n]` as the Levenshtein distance between the following two strings
    1.  `[null, str1[0], str1[1], ... str1[m-1]]`
    2.  `[null, str2[0], str2[1], ... str2[n-1]]`
3.  Example: let str1 = 'def' and str2 = 'abcdef', then the (3+1)x(6+1) array will be created to represent the following

|     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- |
|     | null| a   | b   | c   | d   | e   | f   |
| null|     |     |     |     |     |     |     |
| d   |     |     |     |     |     |     |     |
| e   |     |     |     |     |     |     |     |
| f   |     |     |     |     |     |     |     |

4.  Compute the `Dist[0]` row by the following rule:
    1.  `Dist[0][0] = 0`
    2.  `Dist[0][n] = Dist[0][n-1] + 1` for all 0 < n < N+1
5.  Compute the `Dist[m]` row for m>0 by the following rule:
    1.  For n=0, set `Dist[m][0] = Dist[m-1][0] + 1`
    2.  For n>0, do the following
        1.  Compute C by the following rule:
            1.  If `str1[m-1] == str2[n-1]`, then C = 0
            2.  Otherwise, C = 1
        2.  Set `Dist[m][n]` to the minimum of the following 3:
            1.  `Dist[m-1][n] + 1`
            2.  `Dist[m][n-1] + 1`
            3.  `Dist[m-1][n-1] + C`
6.  Return `Dist[M][N]` as the answer

Explanation

* `Dist[0][0]` is essentially the cost of modifying `[null]` to `[null]`. So the cost is 0
* `Dist[0][1]` is the cost of modifying `[null]` to `[null, a]`. So the cost is `Dist[0][0]` + "insert operation cost"
    * Same idea applies to all `Dist[0][n]` for n>0
* `Dist[1][0]` is the cost of modifying `[null, d]` to `[null]`. So the cost is `Dist[0][0]` + "remove operation cost" 
    * Same idea applies to all `Dist[m][0]` for n>0
* Now to compute `Dist[m][n]` for any m>0 and n>0, it will be the minimum cost of the 3 possible approaches:
    * Remove `str1[m-1]`, and edit `str1[0...m-2]` to `str2[n-1]` (total cost = 1 + `Dist[m-1][n]`)
    * Edit `str1[0...m-1]` to `str2[n-2]`, and insert `str2[n-1]` at the end (total cost = `Dist[m][n-1] + 1`)
    * Edit `str1[0...m-2]` to `str2[n-2]`, and then replace `str1[m-1]` with `str2[n-1]` (total cost = `Dist[m-1][n-1] + C`)
        * Note that if `str1[m-1] == str2[n-1]`, then no "replace" operation is required, and C will be 0.
* The above 3 possible approaches can be illustrated as the following 2x2 array:

|     |     |
| --- | --- |
| Replace/Copy | Remove |
| Insert | `D[m][n]` |

## Reference

* <https://practice.geeksforgeeks.org/problems/edit-distance/0>
* <https://en.wikipedia.org/wiki/Levenshtein_distance>
* <https://people.cs.pitt.edu/~kirk/cs1501/Pruhs/Spring2006/assignments/editdistance/Levenshtein%20Distance.htm>
