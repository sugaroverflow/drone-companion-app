workflow "Dependency Check oh push. " {
  resolves = ["Snyk CLI Action"]
  on = "push"
}

action "Snyk CLI Action" {
  uses = "clarkio/snyk-cli-action@1.0.0"
}
