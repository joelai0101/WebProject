// https://www.youtube.com/watch?v=JSmFZMJURug
// https://www.youtube.com/watch?v=MtQL_ll5KhQ
// https://rust-algo.club/sorting/heapsort/
// https://alrightchiu.github.io/SecondRound/comparison-sort-heap-sortdui-ji-pai-xu-fa.html
// http://notepad.yehyeh.net/Content/Algorithm/Sort/Heap/Heap.php
// https://medium.com/codeda/%E6%BC%94%E7%AE%97%E6%B3%95%E7%AD%86%E8%A8%98-%E4%BA%8C-heap-sort-and-quick-sort%E5%AF%A6%E4%BD%9Cin-java-5b66c6322777
// https://openhome.cc/Gossip/AlgorithmGossip/HeapSort.htm
/*
 * Heapsort 的特性：
 * 使用 heap 資料結構輔助，通常使用 binary heap。
 * 不穩定排序：排序後，相同鍵值的元素相對位置可能改變。
 * 原地排序：不需額外花費儲存空間來排序。
 * 較差的 CPU 快取：heap 不連續存取位址的特性，不利於 CPU 快取。
 * 
 * Heapsort 的演算法分為兩大步驟：
 * 1. 將資料轉換為 heap 資料結構（遞增排序用 max-heap, 遞減排序選擇 min-heap）。
 * 2. 逐步取出最大／最小值，並與最後一個元素置換。具體步驟如下：
 * 		1. 交換 heap 的 root 與最後一個 node，縮小 heap 的範圍（排序一筆資料，故 heap 長度 -1）。
 * 		2. 更新剩下的資料，使其滿足 heap 的特性，稱為 heap ordering property。
 * 		3. 重複前兩個步驟，直到 heap 中剩最後一個未排序的資料。
 * 
 * Heap ordering property：一個 heap 必須要滿足的條件。以 heap 種類不同有幾種變形。
 * 		min-heap property：每個結點皆大於等於其父節點的值，且最小值在 heap root。
 * 		max-heap property：每個結點皆小於等於其父節點的值，且最大值在 heap root。
 * 1. Heapify：將陣列轉換為 heap 資料結構（heapify）。
 * 2. Sorting：不斷置換 heap root 與最後一個元素來排序，並修正剩餘未排序資料使其符合 heap order。
 * 
 * Build heap (heapify):
 * 建立一個 binary heap 有兩種方法，
 * 一種是一個個元素慢慢加入 heap 來建立；
 * 另一種則是給定隨意的序列，再透過 heapify 演算法修正序列為有效的 heap。
 * 
 * Heapify 是指將序列修正至符合 heap ordering 的序列。
 * 給定一個元素，假定其為非法的 heap order，而該元素之後的 subtree 視為符合 heap ordering property。
 * 欲修正這個在錯誤位置的元素，必須透過與其 children node 置換往下篩，這個往下篩的過程就稱為 sift down
 * sift down 會不斷將該元素與其 child node 比較，若不符合 heap order 則與 child node 置換，並繼續疊代每一個 level。
 * 
 * Sorting (sift down):
 * 利用 max-heap（或 min-heap）的最大值（最小值）會在首個元素的特性，與最後一個元素置換，完成排序，
 * 並將剩餘的部分透過 sift down 修正符合 heap order。所以總共需要做 n 次 sift down
 * 
 * Binary Heap有兩項基本特徵：
 * 特徵一：Binary Heap之結構可以視作Complete Binary Tree。
 * 方便尋找「parent-child」之關係
 * 特徵二：若將位於index(i)之node視為subtree之root，那麼，可將此Binary Heap分為兩類：
 * 		Max Heap：在每一個subtree中，root之「數值」要比兩個child之「數值」還要大
 * 		Min Heap：在每一個subtree中，root之「數值」要比兩個child之「數值」還要小
 * 
 * MaxHeapify()的功能，是要「由上而下」地，以Max Heap的規則(root的數值「大於」兩個child的數值)，調整矩陣。
 * BuildMaxHeap()
 * 對所有「具有child的node」進行MaxHeapify()，也就是位於index(1) index(⌊N/2⌋)的node，就能夠將任意矩陣調整成Max Heap。
 * 
 * Max Heap的特徵是「第一個node具有最大值」，如果要將資料「由小到大」排序，步驟如下：
 * 		1. 把「第一個node」和「最後一個node」互換位置。
 * 		2. 假裝heap的「最後一個node」從此消失不見。
 * 		3. 對「第一個node」進行MaxHeapify()。
 * 重複以上步驟，從heap的最後一個node開始，一路往上，直到root，便能得到排好序的矩陣。
 * */

package heapSort;

public class HeapSort {

}
