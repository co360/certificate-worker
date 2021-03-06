import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '~/components/common/loading';

export default props => {
  const params = useParams()
  const dispatch = useDispatch()
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    (async () => {
      setLoading(true)
      props.action && await props.action({ dispatch, params })
      setLoading(false)
    })()
  }, [])

  return (loading ? <Loading /> : <>{props.children}</>)
}
