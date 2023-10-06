# Springboard Exercise

# Express Calculator

For this exercise, you will build an Express.js application that performs three statistical operations given an arbitrary amount of numbers:

1. **mean** (average)
2. **median** (midpoint)
3. **mode** (most frequent)

The operations are invoked via **one route per operation**.

## **Requirements**

The three base routes are **_/mean_**, **_/median_**, **_/mode_**. All accept GET requests

Each route takes a query key of **_nums_** which is a comma-separated list of numbers. For example, if I want to get the mean of 1, 3, 5, and 7, that would look like be a GET request to **_/mean?nums=1,3,5,7_**.

The response of each operation should be JSON which looks like this:

```json
response: {
  operation: "mean",
  value: 4
}
```

The app should “gracefully” handle the following errors:

- Passing in an invalid number (NaN errors). For instance, **_/mean?nums=foo,2,3_** should respond with a **_400 Bad Request_** status code and a response that saying something like: **_foo is not a number._**
- Empty input: **_/mean_** without passing any nums should respond with a **_400 Bad Request_** status code saying something like **_nums are required._**

Make sure you have unit tests for **_mean_**, **_median_** and **_mode_**.
