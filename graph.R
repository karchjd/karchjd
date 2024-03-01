library(gh)

print("generate something!")

my_repos <- gh("GET /users/{username}/repos", username = "brandmaier")
print(my_repos)
