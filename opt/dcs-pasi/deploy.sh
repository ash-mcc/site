site -s check-token || site get-token -u admin -p admin
site post-resources --file resources.edn
site put-graphql --file schema.graphql --path /pasi/graphql