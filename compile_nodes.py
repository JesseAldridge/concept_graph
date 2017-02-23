import json, os

with open('nodes_list.json') as f:
  in_str = f.read()
edge_list_in = json.loads(in_str)
edge_list_out = []
name_to_id = {}

for i, edge in enumerate(edge_list_in):
  from_name, to_name = edge
  if from_name not in name_to_id:
    name_to_id[from_name] = len(name_to_id)
  if to_name not in name_to_id:
    name_to_id[to_name] = len(name_to_id)
  edge_list_out.append({'source': name_to_id[from_name], 'target': name_to_id[to_name], 'value': 1})

force_directed_dict = {
  'nodes': [{'name': name} for name in name_to_id],
  'links': edge_list_out
}
out_str = json.dumps(force_directed_dict, indent=2)

with open('nodes_force_directed.json', 'w') as f:
  f.write(out_str)
