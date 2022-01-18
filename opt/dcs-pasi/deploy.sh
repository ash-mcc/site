rm -rf generated
mkdir generated

awk '{sub("{{pasi-org}}","zws")}1' resources.edn > generated/zws-resources.edn
awk '{sub("{{pasi-org}}","ace")}1' resources.edn > generated/ace-resources.edn
#awk '{sub("{{pasi-org}}","stcmf")}1' resources.edn > generated/stcmf-resources.edn

site -s check-token || site get-token -u admin -p admin

site post-resources --file generated/zws-resources.edn
site post-resources --file generated/ace-resources.edn
#site post-resources --file generated/stcmf-resources.edn

site put-graphql --file zws-schema.graphql --path /pasi/zws/graphql
site put-graphql --file ace-schema.graphql --path /pasi/ace/graphql
#site put-graphql --file stcmf-schema.graphql --path /pasi/stcmf/graphql