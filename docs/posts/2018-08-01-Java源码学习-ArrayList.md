---
layout: Post
title: Java源码学习 ArrayList 
date: 2018-08-01 12:14:39
categories: java
tags: 
  - java
  - 源码
  - ArrayList
---

ArrayList  线性表的顺序存储，插入删除元素的时间复杂度为**O（n）**,求表长以及增加元素，取第 i 元素的时间复杂度为**O（1）**。和 Vector 不同，**ArrayList 中的操作不是线程安全的**！所以，建议在单线程中才使用 ArrayList，而在多线程中可以选择 Vector 或者 CopyOnWriteArrayList。
问题：

## 要点：
以无参数构造方法创建 ArrayList 时，实际上初始化赋值的是一个空数组。当真正对数组进行添加元素操作时，才真正分配容量。即向数组中添加第一个元素时，数组容量扩为10

### 1. 扩容时，容量计算： 
```java
// -> oldCapacity + oldCapacity/2 相当于 1.5倍
int newCapacity = oldCapacity + (oldCapacity >> 1);  
```

`">>"（移位运算符）：>>1 右移一位相当于除2，右移n位相当于除以 2 的 n 次方。这里 oldCapacity 明显右移了1位所以相当于oldCapacity /2。对于大数据的2进制运算,位移运算符比那些普通运算符的运算要快很多,因为程序仅仅移动一下而已,不去计算,这样提高了效率,节省了资源`

### 2. 扩容流程
ensureCapacityInternal(minCapacity) -> calculateCapacity
-> ensureExplicitCapacity(minCapacity) 在该方法中判断是否需要 扩容，之后调用 grow(minCapacity)
```java
private void ensureExplicitCapacity(int minCapacity) {
    modCount++;

    // overflow-conscious code
    if (minCapacity - elementData.length > 0)
        grow(minCapacity);
}
```
进行扩容

### 3. System.arraycopy 和 Arrays.copyOf 
两个函数在 ArrayList中大量出现，如在add(index, obj), remove(index),  addAll() , toArray() 等方法中都用了 System.arraycopy方法；Arrays.copyOf 方法，在扩容 和传入 集合的构造函数中使用该方法
区别： 

```java
public static native void arraycopy(
            Object src,   // 源数组
            int  srcPos, // copy源数组的起始位置
            Object dest, // 目标数组
            int destPos, // copy目标数组的起始位置
            int length); // copy length
```

实现数组之间的复制（将源数组复制到目标数组），最主要的是可以实现自己复制自己,  

```java
public static <T> T[] copyOf(T[] original, int newLength)
```

方法返回的数组是新的数组对象，第二个自变量指定要建立的新数组长度，如果新数组的长度超过原数组的长度，则保留数组默认值，其实 copyOf 内部实现

```java
public static <T,U> T[] copyOf(U[] original, int newLength, Class<? extends T[]> newType) {
    @SuppressWarnings("unchecked")
    T[] copy = ((Object)newType == (Object)Object[].class)
        ? (T[]) new Object[newLength]
        : (T[]) Array.newInstance(newType.getComponentType(), newLength);
// 这里也调用了 System.arraycopy
    System.arraycopy(original, 0, copy, 0,
                     Math.min(original.length, newLength));
    return copy;
}
```

### 4.ensureCapacity方法
这个方法 ArrayList 内部没有被调用过，所以很显然是提供给用户调用的，那么这个方法有什么作用呢？在 add 大量元素之前用 ensureCapacity 方法，以减少增量重新分配的次数

#### 总结 

1. 默认大小为 10，每次扩容是原来容量的1.5倍
2. 在使用ArrayList时，new时最好传入一个大小，如果没有传在add时会进行扩容处理；
3. 大量数据时可以先调用ensureCapacity 进行扩容。