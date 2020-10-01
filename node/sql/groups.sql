SELECT
	nd.id as node_id,
	nd.caption as node_caption,
	s.color as node_status_color,
	s.description as node_status_description,
	gp.id as group_id,
	gp.caption as group_caption,
	i.id as interface_id,
	i.caption as interface_caption,
	s2.color as interface_status_color,
	s2.description as interface_status_description,
	u.id as user_id,
	u.firstname,
	u.lastname,
	u.email,
	ap.id as application_id,
	ap.caption as application_caption
from groups_nodes gp_n
INNER JOIN groups gp
	ON gp_n.group_id = gp.id
INNER JOIN nodes nd
	ON gp_n.node_id  = nd.id
LEFT JOIN interfaces i
	ON nd.interface = i.id
LEFT JOIN statuses s
	ON nd.status = s.Id
LEFT JOIN users u
	ON nd.admin  = u.id
LEFT JOIN nodes_applications na
	ON nd.id = na.node_id
LEFT JOIN applications ap
	ON na.application_id = ap.id
LEFT JOIN statuses s2
	ON i.status = s2.Id
