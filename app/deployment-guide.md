1. Install AZ CLI
brew update && brew install azure-cli

registryname: containerregistryteam22

az acr build --registry containerregistryteam22 --image nextapp .

