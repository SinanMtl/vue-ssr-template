desc 'Task description'
task :push do
  system "echo 'Publishing...'"
  system "npm version patch"
  system "echo '✔ Npm version patched'"
  system "npm publish"
  system "echo '✔ Published to npm'"
  system "git push origin master"
  system "echo '✔ Pushed to repository'"
  system "echo '✔ Completed'"
end