import React from "react";

const ArrayIntro = () => {
    return(
        <div>
            <p className="subpage_p">數組（Array）是一種線性資料結構，它由一組具有相同資料類型的元素按照一定順序排列而成。 數組中的每個元素都有一個唯一的索引，透過索引可以直接存取數組中的元素。以下是關於數組的詳細解釋：<br/><br/>
            1. 元素類型：數組中的元素通常具有相同的資料類型，例如整數、浮點數、字串等。 這意味著數組中的每個元素佔用的記憶體空間大小相同。<br/><br/>
            2. 索引：數組中的元素透過唯一的索引進行存取。 索引通常從零開始，依序遞增。 例如，第一個元素的索引為 0，第二個元素的索引為 1，以此類推。 透過索引可以快速定位和存取數組中的元素，時間複雜度為 O(1)。<br/><br/>
            3. 大小：數組的大小是固定的，也就是在建立數組時需要指定數組的長度。 一旦數組被創建，其長度就無法改變。 這意味著數組中的元素是連續儲存的，佔用一塊連續的記憶體空間。<br/><br/>
            4. 存取和修改：可以透過索引來存取和修改數組中的元素。 透過索引存取元素的時間複雜度為 O(1)。 修改元素也是透過索引進行的，可以直接將新值賦給指定索引位置的元素。<br/><br/>
            5. 插入和刪除：在數組中插入或刪除元素通常需要移動其他元素以保持數組的連續性。 例如，如果在數組中間插入一個元素，則需要將插入位置之後的所有元素向後移動一個位置。 因此，插入和刪除操作的時間複雜度通常為 O(n)，其中 n 是數組的長度。<br/><br/>
            6. 記憶體分配：數組在記憶體中是連續儲存的，因此可以透過索引進行快速存取。 然而，由於數組的大小是固定的，當數組的長度超出預先分配的記憶體空間時，需要重新分配更大的記憶體空間，並將原來的元素複製到新的記憶體空間中。 這可能會導致效能開銷（Performance overhead）。<br/><br/>
            總的來說，數組是一種簡單且常用的資料結構，適用於需要快速存取元素，並且數組大小固定的情況。 然而，在插入和刪除操作頻繁的情況下，數組可能不是最佳選擇，因為這些操作的時間複雜度較高。
            </p>
            <p className="subpage_p">Array is a linear data structure consisting of a collection of elements of the same data type arranged in a certain order. Each element in the array has a unique index, and the elements can be accessed directly using these indices.<br/>
                Here is a detailed explanation about arrays:<br/><br/>
                1. Element Type: Elements in an array typically have the same data type, such as integers, floating-point numbers, strings, etc. This means that each element occupies the same amount of memory space.<br/><br/>
                2. Index: Elements in an array are accessed using unique indices. Indices usually start from zero and increment sequentially. For example, the index of the first element is 0, the second element is 1, and so on. Accessing elements by index allows for quick and constant-time (O(1)) access to elements.<br/><br/>
                3. Size: The size of an array is fixed, meaning that the length of the array needs to be specified when creating it. Once created, the length of the array cannot be changed. This implies that the elements in the array are stored contiguously in memory.<br/><br/>
                4. Access and Modification: Elements in an array can be accessed and modified using their indices. Accessing elements by index has a time complexity of O(1). Modifying elements is also done by specifying the index and assigning a new value.<br/><br/>
                5. Insertion and Deletion: Inserting or deleting elements in an array usually requires shifting other elements to maintain the continuity of the array. For example, inserting an element in the middle of the array requires shifting all elements after the insertion point by one position. Therefore, the time complexity of insertion and deletion operations is typically O(n), where n is the length of the array.<br/><br/>
                6. Memory Allocation: Arrays are stored in contiguous memory, allowing for quick access by index. However, when the length of the array exceeds the pre-allocated memory space, it needs to be reallocated to a larger memory space, and the original elements are copied to the new memory space. This can incur performance overhead.<br/><br/>
                In summary, arrays are simple and commonly used data structures suitable for scenarios where quick access to elements and a fixed array size are required. However, in cases where insertion and deletion operations are frequent, arrays may not be the optimal choice due to their higher time complexity for these operations.<br/><br/>
            </p>
        </div>
    )
}

export default ArrayIntro;