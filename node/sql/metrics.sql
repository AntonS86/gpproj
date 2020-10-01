SELECT
	node_id,
	metrics.id,
	cpu_utilization,
	memory_utilization,
	disk_utilization,
	datetime
from
	metrics
INNER JOIN nodes
	on metrics.node_id = nodes.id
ORDER BY node_id, datetime