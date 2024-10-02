function fib(n,memo=[0,1]) {
    if(n<2){
        return memo.slice(0, n + 1); // Base case
    }
    
    // Recursively calculate if not in the memo array
    if (memo[n] === undefined) {
        memo[n] = fib(n - 1, memo)[n - 1] + fib(n - 2, memo)[n - 2];
    }

    return memo;
}
