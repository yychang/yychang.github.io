# C++ unique_ptr Quick Reference

## Instantiation

```cpp
class MyData {
    public:
        MyData(int x=0);
        ~MyData();

        int m_x;
}

int main() {
    std::unique_ptr<MyData> d1{ new MyData(10) };
    std::unique_ptr<MyData> d2{ std::make_unique<MyData>(20) }; // std::make_unique since C++14
    std::unique_ptr<MyData> d3;
    d3 = std::make_unique<MyData>(30); 

    // No delete/release required. 
}
```

## Operations

```cpp
int main() {
    std::unique_ptr<MyData> d1{ std::make_unique<MyData>(10) }; 
    std::unique_ptr<float []> d2{ std::make_unique<float []>(5) };

    MyData& ref_d1 = *d1; // operator* returns the reference to the underlying resource.
    MyData* p_d1 = d1.get() // function get() returns the pointer to the underlying resource.
    
    // Access the underlying resource of the unique_ptr like a regular pointer
    int x = d1->m_x; 
    d2[0] = 0;
   
    std::unique_ptr<MyData> d3{ std::make_unique<MyData>(30) };
    // d3 = d1; // Error: cannot copy unique_ptr.
    d3 = std::move(d1); // delete resource under d3; move resource under d1 to d3; d1 becomes nullptr
}
```

## Passing unique_ptr to Function

```cpp
int func1(MyData& arg) {
    return arg.m_x;
}

int func2(MyData* arg) {
    if(arg) {
        return arg->m_x;
    } else {
        return 0;
    }
}


int func3(unique_ptr<MyData>& arg) {
    return arg->m_x;
}

int func4(unique_ptr<MyData> arg) {
    return arg->m_x;
}

int main() {
    std::unique_ptr<MyData> d1{ std::make_unique<MyData>(10) }; 

    int x1 = func1(*d1);      // Recommended approach when MyData is required
    int x2 = func2(d1.get()); // Recommended approach when MyData is optional

    int x3 = func3(d1);              // Recommended approach only if the unique_ptr itself may be changed by the function. 
    int x4 = func4( std::move(d1) ); // Recommended approach if the transfer of the ownship is intended.
}
```

## Reference

* https://www.learncpp.com/cpp-tutorial/stdunique_ptr/
* https://stackoverflow.com/questions/30905487/how-can-i-pass-stdunique-ptr-into-a-function
* https://youtu.be/xnqTKD8uD64?t=730